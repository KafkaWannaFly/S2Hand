import LocationsJson from "../data/locations.json";

export class LocationsService {
  getCities() {
    const rawData = LocationsJson as any[];
    const setCities = new Set<string>();
    rawData.forEach((item) =>
      setCities.add(item.city.replace(/Tỉnh|Thành phố/, ""))
    );
    return [...setCities].sort();
  }

  getDistricts(city: string) {
    const rawData = LocationsJson as any[];
    const setDistricts = new Set<string>();
    rawData.forEach((item) => {
      if (item.city.includes(city)) setDistricts.add(item.district);
    });
    return [...setDistricts].sort();
  }

  getWards(city: string, district: string) {
    const rawData = LocationsJson as any[];
    const setWards = new Set<string>();
    rawData.forEach((item) => {
      if (item.city.includes(city) && item.district.includes(district))
        setWards.add(item.ward);
    });
    return [...setWards].sort();
  }
}
