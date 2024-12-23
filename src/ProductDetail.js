import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const productData = {
  "rocker-roller-bearings": {
    title: "Rocker & Roller Bearings",
    description:
      "Detailed description about Rocker & Roller Bearings goes here...",
    image: "https://cecobearings.com/wp-content/uploads/2020/09/banner1-5.jpg"
  },
  "expansion-joints": {
    title: "Expansion Joints",
    description:
      "Detailed description about Expansion Joints goes here...",
    image: "https://cecobearings.com/wp-content/uploads/2020/09/Compression-Seal-Expansion-Joint-400x300.jpg"
  },
  "pot-bearings": {
    title: "POT Bearings",
    description:
      "Detailed description about POT Bearings goes here...",
    image: "https://cecobearings.com/wp-content/uploads/2020/09/potbearing-600x300.jpg"
  },
  "spherical-bridge-bearings": {
    title: "Spherical Bridge Bearings",
    description:
      "Detailed description about Spherical Bridge Bearings goes here...",
    image: "https://cecobearings.com/wp-content/uploads/2020/09/Spherical-Bearings-400x200.jpg"
  },
  "elastomeric-bearing": {
    title: "Elastomeric Bearing",
    description:
      "Detailed description about Elastomeric Bearing goes here...",
    image: "https://cecobearings.com/wp-content/uploads/2020/09/Elastomeric-Bearing-1-400x200.jpg"
  },
  "repair-rehabilitation": {
    title: "Repair & Rehabilitation",
    description:
      "Detailed description about Repair & Rehabilitation goes here...",
    image: "https://cecobearings.com/wp-content/uploads/2020/09/Bridge-Rehabilitation-1-400x200.jpg"
  },
  "lockup-devices": {
    title: "Lockup Devices",
    description:
      "Detailed description about Lockup Devices goes here...",
    image: "https://cecobearings.com/wp-content/uploads/2020/09/lockup-devices-banner-400x200.jpg"
  },
  "lead-rubber-bearings": {
    title: "Lead Rubber Bearings",
    description:
      "Detailed description about Lead Rubber Bearings goes here...",
    image: "https://cecobearings.com/wp-content/uploads/2020/09/Lead-Rubber-Isolators-banner-400x200.jpg"
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productData[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <h1 className="product-detail-title">{product.title}</h1>
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <p className="product-detail-description">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
