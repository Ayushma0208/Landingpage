import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const products = [
    {
      id: "rocker-roller-bearings",
      title: "Rocker & Roller Bearings",
      description:
        "Roller Type Bearing with Gear Arrangement. Rocker Type Bearing. Rocker Type Bearing. A rocker bearing is a type of expansion bearing that comes in a great variety.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cecobearings.com/wp-content/uploads/2020/09/banner1-5.jpg",
      details: "Detailed information about Rocker & Roller Bearings...",
    },
    {
      id: "expansion-joints",
      title: "Expansion Joints",
      description:
        "Single Strip seal elastomeric joint (Movement up to 80mm). Single strip expansion joint consist of two edge beams with anchorages and with elastomeric. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cecobearings.com/wp-content/uploads/2020/09/Compression-Seal-Expansion-Joint-400x300.jpg",
      details: "Detailed information about Expansion Joints...",
    },
    {
      id: "pot-bearings",
      title: "POT Bearings",
      description:
        "POT bearing consisting of a metal piston supported by a disc of unreinforced elastomer that is confined within a metal cylinder for allowing rotational movement. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cecobearings.com/wp-content/uploads/2020/09/potbearing-600x300.jpg",
      details: "Detailed information about POT Bearings...",
    },
    {
      id: "spherical-bridge-bearings",
      title: "Spherical Bridge Bearings",
      description:
        "SPHERICAL bearings ensure the controlled transfer of loads between a structure’s superstructure and its substructure. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cecobearings.com/wp-content/uploads/2020/09/Spherical-Bearings-400x200.jpg",
      details: "Detailed information about Spherical Bridge Bearings...",
    },
    {
      id: "elastomeric-bearing",
      title: "Elastomeric Bearing",
      description:
        "We are designing and manufacturing Rubber Bridge Bearings made of up Neoprene / natural rubber since 1982.An elastomeric bridge bearing. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cecobearings.com/wp-content/uploads/2020/09/Elastomeric-Bearing-1-400x200.jpg",
      details: "Detailed information about Elastomeric Bearing...",
    },
    {
      id: "repair-rehabilitation",
      title: "Repair & Rehabilitation",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cecobearings.com/wp-content/uploads/2020/09/Bridge-Rehabilitation-1-400x200.jpg",
      details: "Detailed information about Repair & Rehabilitation...",
    },
    {
      id: "lockup-devices",
      title: "Lockup Devices",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cecobearings.com/wp-content/uploads/2020/09/lockup-devices-banner-400x200.jpg",
      details: "Detailed information about Lockup Devices...",
    },
    {
      id: "lead-rubber-bearings",
      title: "Lead Rubber Bearings",
      description:
        "The high amounts of energy dissipation solution suitable for bridges and buildings in medium or high level seismic areas.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cecobearings.com/wp-content/uploads/2020/09/Lead-Rubber-Isolators-banner-400x200.jpg",
      details: "Detailed information about Lead Rubber Bearings...",
    },
  ];

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <h1 className="product-detail-title">{product.title}</h1>
      <div className="product-detail">
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-image"
        />
        <p className="product-detail-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
