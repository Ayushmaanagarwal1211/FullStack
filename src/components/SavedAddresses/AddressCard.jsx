import React from 'react';
import { MapPin, Trash2 } from 'lucide-react';
import { getAddressIcon } from './addressUtils';

export const AddressCard = ({
  address,
  onDelete,
  onSelect,
}) => {
  const Icon = getAddressIcon(address.type);

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-red-500 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="mt-1">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium capitalize">{address.type}</h3>
            <p className="text-sm text-gray-600">{address.fullAddress}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onSelect(address)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <MapPin className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(address.id)}
            className="p-2 hover:bg-gray-100 rounded-full text-red-500"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};