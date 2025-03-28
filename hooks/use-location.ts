import { useQuery } from "@tanstack/react-query";

interface UseLocationOptions {
  provinceCode?: number;
  districtCode?: number;
}

const fetchProvinces = async (): Promise<Province[]> => {
  const response = await fetch("https://provinces.open-api.vn/api/p/");
  if (!response.ok) {
    throw new Error(`Failed to fetch provinces: ${response.status}`);
  }
  return response.json();
};

const fetchDistricts = async (provinceCode: number): Promise<District[]> => {
  const response = await fetch(
    `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`,
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch districts: ${response.status}`);
  }
  const data: Province = await response.json();
  if (!data.districts) {
    return [];
  }
  return data.districts;
};

const fetchWards = async (districtCode: number): Promise<Ward[]> => {
  const response = await fetch(
    `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`,
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch wards: ${response.status}`);
  }
  const data: District = await response.json();
  if (!data.wards) {
    return [];
  }
  return data.wards;
};

export const useLocation = ({
  provinceCode,
  districtCode,
}: UseLocationOptions = {}) => {
  const provincesQuery = useQuery({
    queryKey: ["provinces"],
    queryFn: fetchProvinces,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const districtsQuery = useQuery({
    queryKey: ["districts", provinceCode],
    queryFn: () =>
      provinceCode ? fetchDistricts(provinceCode) : Promise.resolve([]),
    enabled: !!provinceCode,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const wardsQuery = useQuery({
    queryKey: ["wards", districtCode],
    queryFn: () =>
      districtCode ? fetchWards(districtCode) : Promise.resolve([]),
    enabled: !!districtCode,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    // Data
    provinces: provincesQuery.data || [],
    districts: districtsQuery.data || [],
    wards: wardsQuery.data || [],

    // Loading states
    loadingProvinces: provincesQuery.isLoading,
    loadingDistricts: districtsQuery.isLoading,
    loadingWards: wardsQuery.isLoading,

    // Error states
    provinceError: provincesQuery.error
      ? (provincesQuery.error as Error).message
      : "",
    districtError: districtsQuery.error
      ? (districtsQuery.error as Error).message
      : "",
    wardError: wardsQuery.error ? (wardsQuery.error as Error).message : "",

    // Refetch functions
    refetchProvinces: provincesQuery.refetch,
    refetchDistricts: districtsQuery.refetch,
    refetchWards: wardsQuery.refetch,
  };
};
