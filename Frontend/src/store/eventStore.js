// src/store/eventStore.js
import create from "zustand";
import api from "../api/api"; // Import Axios instance

const useEventStore = create((set) => ({
  event: null,
  loading: false,
  error: null,

  // Fetch event details from the API
  fetchEventDetails: async (eventId) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/events/${eventId}`); // Replace with actual endpoint
      set({ event: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Submit booking details to the API
  submitBooking: async (bookingData) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/bookings", bookingData); // Replace with actual endpoint
      set({ loading: false });
      return response.data;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },
}));

export default useEventStore;
