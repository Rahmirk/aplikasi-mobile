/**
 * API Service untuk komunikasi dengan backend
 * 
 * Contoh penggunaan:
 * import { apiClient } from './api';
 * 
 * const login = async (email, password) => {
 *   try {
 *     const response = await apiClient.post('/auth/login', { email, password });
 *     return response;
 *   } catch (error) {
 *     console.error('Login failed:', error);
 *   }
 * };
 */

// Ganti URL ini dengan URL backend Anda
const API_BASE_URL = 'https://api.uniku.ac.id/v1';

/**
 * Simple API client untuk request HTTP
 */
export const apiClient = {
  /**
   * GET request
   * @param {string} endpoint - API endpoint
   * @param {object} headers - Custom headers (optional)
   */
  async get(endpoint, headers = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * POST request
   * @param {string} endpoint - API endpoint
   * @param {object} data - Request body
   * @param {object} headers - Custom headers (optional)
   */
  async post(endpoint, data = {}, headers = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * PUT request
   * @param {string} endpoint - API endpoint
   * @param {object} data - Request body
   * @param {object} headers - Custom headers (optional)
   */
  async put(endpoint, data = {}, headers = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * DELETE request
   * @param {string} endpoint - API endpoint
   * @param {object} headers - Custom headers (optional)
   */
  async delete(endpoint, headers = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};

/**
 * Authentication service
 */
export const authService = {
  /**
   * Login user
   * @param {string} email - Email/Username
   * @param {string} password - Password
   */
  async login(email, password) {
    return apiClient.post('/auth/login', {
      email,
      password,
    });
  },

  /**
   * Register user
   * @param {object} userData - User registration data
   */
  async register(userData) {
    return apiClient.post('/auth/register', userData);
  },

  /**
   * Refresh token
   * @param {string} refreshToken - Refresh token
   */
  async refreshToken(refreshToken) {
    return apiClient.post('/auth/refresh', {
      refreshToken,
    });
  },

  /**
   * Logout user
   * @param {string} token - User token
   */
  async logout(token) {
    return apiClient.post('/auth/logout', {}, {
      Authorization: `Bearer ${token}`,
    });
  },

  /**
   * Request password reset
   * @param {string} email - Email address
   */
  async requestPasswordReset(email) {
    return apiClient.post('/auth/forgot-password', {
      email,
    });
  },

  /**
   * Reset password
   * @param {string} token - Reset token
   * @param {string} newPassword - New password
   */
  async resetPassword(token, newPassword) {
    return apiClient.post('/auth/reset-password', {
      token,
      newPassword,
    });
  },
};

/**
 * User service
 */
export const userService = {
  /**
   * Get current user profile
   * @param {string} token - User token
   */
  async getProfile(token) {
    return apiClient.get('/user/profile', {
      Authorization: `Bearer ${token}`,
    });
  },

  /**
   * Update user profile
   * @param {string} token - User token
   * @param {object} data - User data to update
   */
  async updateProfile(token, data) {
    return apiClient.put('/user/profile', data, {
      Authorization: `Bearer ${token}`,
    });
  },

  /**
   * Change password
   * @param {string} token - User token
   * @param {string} oldPassword - Old password
   * @param {string} newPassword - New password
   */
  async changePassword(token, oldPassword, newPassword) {
    return apiClient.post('/user/change-password', {
      oldPassword,
      newPassword,
    }, {
      Authorization: `Bearer ${token}`,
    });
  },
};
