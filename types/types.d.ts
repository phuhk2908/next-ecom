interface AuthCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface AuthActionResult {
  success: boolean;
  error?: string;
  message?: string;
}

type RouteItem = {
  name: string;
  href: string;
  children?: RouteItem[];
};
interface Ward {
  code: number;
  codename: string;
  district_code: number;
  division_type: string;
  name: string;
}

interface District {
  code: number;
  codename: string;
  division_type: string;
  name: string;
  province_code: number;
  wards?: Ward[];
}

interface Province {
  code: number;
  codename: string;
  division_type: string;
  name: string;
  phone_code: number;
  districts?: District[];
}
