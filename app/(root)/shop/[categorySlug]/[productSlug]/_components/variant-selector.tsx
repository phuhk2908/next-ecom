"use client";

interface ColorInfo {
  value: string;
  hexcode: string;
}

interface AttributeOption {
  name: string;
  values: Array<string | ColorInfo>;
}

interface VariantSelectorProps {
  attributes: AttributeOption[];
  selectedAttributes: Record<string, string>;
  onChange: (attributeName: string, value: string) => void;
  isAttributeValueAvailable: (attributeName: string, value: string) => boolean;
}

const VariantSelector = ({
  attributes,
  selectedAttributes,
  onChange,
  isAttributeValueAvailable,
}: VariantSelectorProps) => {
  return (
    <>
      {attributes.map((attribute: AttributeOption) => (
        <div key={attribute.name}>
          <h3 className="text-sm font-medium text-gray-900">
            {attribute.name}
          </h3>

          <div className="mt-2">
            {attribute.name === "Color" ? (
              <div className="flex space-x-3">
                {attribute.values.map((colorInfoObj) => {
                  // Type assertion to access color properties
                  const colorInfo = colorInfoObj as ColorInfo;
                  const isAvailable = isAttributeValueAvailable(
                    attribute.name,
                    colorInfo.value,
                  );

                  return (
                    <div
                      key={colorInfo.value}
                      className={`h-6 w-6 cursor-pointer rounded-full ${
                        selectedAttributes[attribute.name] === colorInfo.value
                          ? "ring-2 ring-gray-800 ring-offset-2"
                          : ""
                      } ${!isAvailable ? "opacity-40" : ""}`}
                      style={{
                        backgroundColor: colorInfo.hexcode,
                      }}
                      onClick={() =>
                        isAvailable && onChange(attribute.name, colorInfo.value)
                      }
                      title={colorInfo.value}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {attribute.values.map((value) => {
                  const stringValue = value as string;
                  const isAvailable = isAttributeValueAvailable(
                    attribute.name,
                    stringValue,
                  );

                  return (
                    <button
                      key={stringValue}
                      className={`rounded px-4 py-2 text-sm font-medium ${
                        selectedAttributes[attribute.name] === stringValue
                          ? "bg-gray-900 text-white"
                          : "bg-gray-200 text-gray-900"
                      } ${!isAvailable ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"}`}
                      onClick={() =>
                        isAvailable && onChange(attribute.name, stringValue)
                      }
                      disabled={!isAvailable}
                    >
                      {stringValue}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default VariantSelector;
