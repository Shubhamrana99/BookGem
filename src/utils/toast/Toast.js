import { toast } from "react-toastify";

const toastStyling = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const signInToast = () => {
  toast.success("Logged in successfully", toastStyling);
};

export const signOutToast = () => {
  toast.success("Logout successful", toastStyling);
};

export const handleErrorToast = () => {
  toast.error("Error found! Please try again!", toastStyling);
};

export const addToCartToast = () => {
  toast.success("Added to cart", toastStyling);
};

export const addToWishListToast = () => {
  toast.success("Added to Wishlist", toastStyling);
};

export const removedFromCartToast = () => {
  toast.error("Removed from Cart", toastStyling);
};

export const removedFromWishListToast = () => {
  toast.error("Removed from wishlist", toastStyling);
};

export const addressAddToast = () => {
  toast.success("Address Added successful", toastStyling);
};

export const orderplacedToast = () => {
  toast.success("Order Placed! Thanks For Shopping 🙏🙏", toastStyling);
};

export const fillAddressToast = () => {
  toast.warning("Add Address First", toastStyling);
};

export const selectAddressToast = () => {
  toast.warning("Please Select address first then checkout", toastStyling);
};

export const pleaseLoggedInToast = () => {
  toast.error("Please Logged in First", toastStyling);
};

export const pleaseFillInput = () => {
  toast.warning("Please Fill the Details", toastStyling);
};

export const passwordMisMatchToast = () => {
  toast.warning(
    "Both password are mismatched, please fill correctly",
    toastStyling
  );
};
