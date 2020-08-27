import React, { useEffect, useState } from 'react';
import api from 'services/api';
import { IProductDTO } from 'store/modules/Cart/dtos';

import CatalogItem from './CatalogItem';

import './styles.css';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProductDTO[]>([]);

  useEffect(() => {
    api
      .get<IProductDTO[]>('products')
      .then(response => setCatalog(response.data));
  }, []);

  return (
    <div>
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Catalog;
