import React from "react";
import { Link } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
  const products = [
    {
      id: "rocker-roller-bearings",
      title: "Rocker & Roller Bearings",
      description:
        "Roller Type Bearing with Gear Arrangement. Rocker Type Bearing. Rocker Type Bearing. A rocker bearing is a type of expansion bearing that comes in a great variety.",
      image: "https://cecobearings.com/wp-content/uploads/2020/09/banner1-5.jpg"
    },
    {
      id: "expansion-joints",
      title: "Expansion Joints",
      description:
        "Single Strip seal elastomeric joint (Movement up to 80mm). Single strip expansion joint consist of two edge beams with anchorages and with elastomeric .",
      image: "https://cecobearings.com/wp-content/uploads/2020/09/Compression-Seal-Expansion-Joint-400x300.jpg"
    },
    {
      id: "pot-bearings",
      title: "POT Bearings",
      description:
        "POT bearing consisting of a metal piston supported by a disc of unreinforced elastomer that is confined within a metal cylinder for allowing rotational movement",
      image: "https://cecobearings.com/wp-content/uploads/2020/09/potbearing-600x300.jpg"
    },
    {
      id: "spherical-bridge-bearings",
      title: "Spherical Bridge Bearings",
      description:
        "SPHERICAL bearings ensure the controlled transfer of loads between a structure’s superstructure and its substructure.",
      image: "https://cecobearings.com/wp-content/uploads/2020/09/Spherical-Bearings-400x200.jpg"
    },
    {
      id: "elastomeric-bearing",
      title: "Elastomeric Bearing",
      description:
        "We are designing and manufacturing Rubber Bridge Bearings made of up Neoprene / natural rubber since 1982.An elastomeric bridge bearing",
      image: "https://cecobearings.com/wp-content/uploads/2020/09/Elastomeric-Bearing-1-400x200.jpg"
    },
    {
      id: "repair-rehabilitation",
      title: "Repair & Rehabilitation",
      description:
        "Structures such as Bridges, Aqueduct, Barrage, Dams are Infrastructure assets which need to be maintained / rehabilitated timely to retain their strength.",
      image: "https://cecobearings.com/wp-content/uploads/2020/09/Bridge-Rehabilitation-1-400x200.jpg"
    },
    {
      id: "lockup-devices",
      title: "Lockup Devices",
      description:
        "The retrofitting solution. The lock-up devices allow slow movement (creep, shrinkage and temperature effects) and maximize reactions for dynamic effects (braking force of trains and earthquake)..",
      image: "https://cecobearings.com/wp-content/uploads/2020/09/lockup-devices-banner-400x200.jpg"
    },
    {
      id: "lead-rubber-bearings",
      title: "Lead Rubber Bearings",
      description:
        "The high amounts of energy dissipation solution suitable for bridges and buildings in medium or high level seismic areas.",
      image: "https://cecobearings.com/wp-content/uploads/2020/09/Lead-Rubber-Isolators-banner-400x200.jpg"
    }
  ];

  return (
    <div className="product-container">
      <h1 className="title">Product</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </Link>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <Link to={`/product/${product.id}`} className="read-more">READ MORE</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
