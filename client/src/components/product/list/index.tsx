import { ProductCard } from "../card";

export function ProductList() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 lg:gap-6">
      <ProductCard>
        <ProductCard.Image />
        <div className="mt-4">
          <div className="grid gap-1">
            <ProductCard.Status>product status</ProductCard.Status>
            <ProductCard.Title>product name</ProductCard.Title>
            <ProductCard.Description>product description</ProductCard.Description>
            <ProductCard.Count>product count</ProductCard.Count>
            <ProductCard.Price>product price</ProductCard.Price>
          </div>
        </div>
      </ProductCard>
      <ProductCard>
        <ProductCard.Image />
        <div className="mt-4">
          <div className="grid gap-1">
            <ProductCard.Status>product status</ProductCard.Status>
            <ProductCard.Title>product name</ProductCard.Title>
            <ProductCard.Description>product description</ProductCard.Description>
            <ProductCard.Count>product count</ProductCard.Count>
            <ProductCard.Price>product price</ProductCard.Price>
          </div>
        </div>
      </ProductCard>
      <ProductCard>
        <ProductCard.Image />
        <div className="mt-4">
          <div className="grid gap-1">
            <ProductCard.Status>product status</ProductCard.Status>
            <ProductCard.Title>product name</ProductCard.Title>
            <ProductCard.Description>product description</ProductCard.Description>
            <ProductCard.Count>product count</ProductCard.Count>
            <ProductCard.Price>product price</ProductCard.Price>
          </div>
        </div>
      </ProductCard>
    </div>
  );
}
