import { db } from "@/lib/firebase";
import { getDocs, collection, addDoc, doc, DocumentReference, setDoc, Timestamp } from "firebase/firestore";

// Add a new document with a generated id.
export const generateDocRef = (colletionName: string): DocumentReference => {
  const newDocRef = doc(collection(db, colletionName));
  return newDocRef;
};

export const addCustomerInfoBooking = async (data: any, bookingRef: DocumentReference) => {
  const currentDate = Timestamp.fromDate(new Date());
  try {
    await setDoc(bookingRef, { ...data, isNew: true, bookingDate: currentDate, orderId: bookingRef.id });
    console.log("Document written with ID: ", bookingRef.id);
    return 1;
  } catch (e) {
    console.error(e);
    return 0;
  }
};

export const getData = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data: any = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

export const formatDetailsForWhatsApp = (customerInfo: any, stayItem: any, travelItem: any, foodItems: any) => {
  const noItemsSelected = !(!!foodItems.length || !!stayItem.length || !!travelItem.length);

  if (!noItemsSelected) {
    let message = `Hi Chill Mount Stays,\n\nHere are my details and bookings:\n`;

    // Add phone details
    message += `Phone Number: ${customerInfo.phone || "Not provided"}\n`;

    // Add stay details
    if (stayItem.length > 0) {
      message += `\nStay Details:\n`;
      message += `Check-in: ${formatDate(customerInfo.checkIn) || "Not provided"}\n`;
      message += `Check-out: ${formatDate(customerInfo.checkOut) || "Not provided"}\n`;
      message += `Guests: ${customerInfo.guests || "Not provided"}\n`;
      message += `I want to book this Stay\n`;
      stayItem.forEach((item: any, idx: any) => {
        message += `${idx + 1}. ${item.name} - ₹${item.price} per night\n`;
      });
    }

    // Add travel details
    if (travelItem.length > 0) {
      message += `\nTravel Details:\n`;
      message += `Pick-up: ${formatDate(customerInfo.pickUp) || "Not provided"}\n`;
      message += `Drop-down: ${formatDate(customerInfo.dropDown) || "Not provided"}\n`;
      message += `Destination: ${customerInfo.destination || "Not provided"}\n`;
      message += `I want to book this Travel\n`;
      travelItem.forEach((item: any, idx: any) => {
        message += `${idx + 1}. ${item.name} - ₹${item.price} per day\n`;
      });
    }

    // Add food details
    if (foodItems.length > 0) {
      message += `\nFood Details:\n`;
      message += `Order Date: ${customerInfo.foodDate || "Not provided"}\n`;
      foodItems.forEach((item: any, idx: any) => {
        message += `${idx + 1}. ${item.name} - Quantity: ${item.itemCount} - ₹${item.itemCount * item.price}\n`;
      });
    }

    return encodeURIComponent(message.trim());
  } else {
    let message = `Hi Chill Mount Stays,\n\nI would like to know more about your services\n`;

    return encodeURIComponent(message.trim());
  }
};

export const localStringToDateObject = (dateTimeString: string) => {
  const [datePart, timePart] = dateTimeString?.split(", ");
  const [day, month, year] = datePart?.split("/").map(Number);
  const dateObject = new Date(year, month - 1, day);
  console.log(dateObject);
  return dateObject;
};

export function formatDate(dateTimeString: string): string {
  const [datePart, timePart] = dateTimeString?.split(", ");
  const [day, month, year] = datePart?.split("/").map(Number);
  const dateObject = new Date(year, month - 1, day);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formattedDate = `${day}, ${monthNames[dateObject.getMonth()]}`;
  return formattedDate;
}

export const manageMinDate = (dateTimeString: string): string => {
  const currentDate = localStringToDateObject(dateTimeString);
  currentDate.setDate(currentDate.getDate() - 1);
  const date = currentDate.toLocaleDateString("en-IN");
  return date;
};
