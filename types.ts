export interface Stay {
  vendorId: string;
  name: string;
  price: number;
  availability: boolean;
  nextAvailability?: string;
  roomsAvailable?: number;
  imgUrls: DBImageFile[];
  description?: string;
  rating?: number;
}
export interface Food {
  foodId: string;
  name: string;
  description: string;
  price: number;
  imgUrls: DBImageFile[];
  category: "Veg" | "Non-Veg";
  availability: boolean;
  nextAvailability?: string;
  rating?: number;
  tags?: string[];
}

export interface Travel {
  vendorId: string;
  name: string;
  travelOption: "AC" | "Non-AC";
  costPerDay: number;
  availability: boolean;
  nextAvailability?: string;
  imgUrls: DBImageFile[];
  description?: string;
  rating?: number;
}

export interface DBImageFile {
  firebaseUrl: string;
  imageId: string;
}
