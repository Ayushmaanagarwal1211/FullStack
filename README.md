# Location Manager

A modern React application for managing delivery locations with interactive maps and address management features.

## Features

- 📍 Location Permission Management
- 🗺️ Interactive Map with Draggable Markers
- 📝 Address Form with Multiple Types (Home, Work, Other)
- 💾 Local Storage for Address Persistence
- 📱 Responsive Design
- 🎯 Geolocation Support
- 📋 Address List Management (Add, Edit, Delete)

## Tech Stack

- React 18.3
- Leaflet Maps (react-leaflet)
- React Icons
- Local Storage for Data Persistence
- CSS for Styling

## Project Structure

```
src/
├── components/
│   ├── address/
│   │   ├── AddressForm.js
│   │   └── AddressTypeButton.js
│   ├── map/
│   │   ├── DraggableMarker.js
│   │   └── MapView.js
│   ├── AddressList.js
│   └── LocationPermission.js
├── hooks/
│   ├── useAddressStorage.js
│   └── useGeolocation.js
├── utils/
│   ├── constants.js
│   └── mapUtils.js
├── App.js
├── App.css
└── main.jsx
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. When first opening the app, you'll be prompted to enable location services
2. You can either:
   - Enable location to automatically detect your position
   - Search manually using the map
3. Add new addresses by:
   - Clicking "Add New Address"
   - Selecting an address type (Home/Work/Other)
   - Filling in the address details
   - Saving the address
4. Manage addresses:
   - View all saved addresses
   - Edit existing addresses
   - Delete addresses
   - Select addresses to view on map

## Features in Detail

### Location Permission
- Handles browser location permissions
- Provides fallback for manual location selection
- Clear user interface for permission management

### Map Integration
- Interactive map using Leaflet
- Draggable markers for precise location selection
- Custom map controls and styling

### Address Management
- Multiple address types (Home, Work, Other)
- Comprehensive address form
- Local storage persistence
- Full CRUD operations for addresses

### User Interface
- Clean and intuitive design
- Responsive layout
- Interactive elements with visual feedback
- Error handling and validation

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure Details

- `components/` - Reusable UI components
- `hooks/` - Custom React hooks for shared logic
- `utils/` - Utility functions and constants
- `App.js` - Main application component
- `App.css` - Global styles

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
