import { useState, useEffect } from "react";
import { Search, Filter, X, ChevronDown, Grid, List } from "lucide-react";
import Img1 from "./assets/img/rug1.jpg";
import Img2 from "./assets/img/rug2.jpg";
import Img3 from "./assets/img/rug3.jpg";
import Img4 from "./assets/img/rug4.jpg";
import Img5 from "./assets/img/rug5.jpg";
import Img6 from "./assets/img/rug6.jpg";
import Img7 from "./assets/img/rug7.jpg";
import Img8 from "./assets/img/rug8.jpg";

// Sample product data - in a real application, this would come from an API or database
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Persian Elegance",
    category: "luxury",
    type: "rug",
    room: "living",
    material: "wool",
    price: 75000,
    rating: 4.8,
    description: "Luxurious Persian-inspired design with intricate patterns",
    imageUrl: Img1,
  },
  {
    id: 2,
    name: "Modern Simplicity",
    category: "modern",
    type: "carpet",
    room: "bedroom",
    material: "synthetic",
    price: 45000,
    rating: 4.5,
    description: "Minimalist design perfect for contemporary spaces",
    imageUrl: Img2,
  },
  {
    id: 3,
    name: "Mosque Prayer Lines",
    category: "specialty",
    type: "mosque",
    room: "prayer",
    material: "polyester",
    price: 120000,
    rating: 5.0,
    description: "Specially designed carpet with prayer lines for mosques",
    imageUrl: Img3,
  },
  {
    id: 4,
    name: "Executive Office",
    category: "commercial",
    type: "carpet",
    room: "office",
    material: "nylon",
    price: 85000,
    rating: 4.6,
    description: "Durable carpet tiles designed for high-traffic office areas",
    imageUrl: Img4,
  },
  {
    id: 5,
    name: "Kids Room Joy",
    category: "specialty",
    type: "rug",
    room: "children",
    material: "cotton",
    price: 35000,
    rating: 4.7,
    description: "Colorful, soft rug perfect for children's play areas",
    imageUrl: Img5,
  },
  {
    id: 6,
    name: "Traditional Royal",
    category: "luxury",
    type: "rug",
    room: "living",
    material: "wool",
    price: 95000,
    rating: 4.9,
    description: "Classic design inspired by royal Nigerian heritage",
    imageUrl: Img6,
  },
  {
    id: 7,
    name: "Hotel Premium",
    category: "commercial",
    type: "carpet",
    room: "hallway",
    material: "polypropylene",
    price: 110000,
    rating: 4.8,
    description: "Premium carpet designed for hotel lobbies and hallways",
    imageUrl: Img7,
  },
  {
    id: 8,
    name: "Cozy Shag",
    category: "modern",
    type: "rug",
    room: "bedroom",
    material: "synthetic",
    price: 40000,
    rating: 4.3,
    description: "Ultra-soft shag rug that adds warmth to any bedroom",
    imageUrl: Img8,
  },
  {
    id: 9,
    name: "Outdoor Patio",
    category: "specialty",
    type: "rug",
    room: "outdoor",
    material: "polypropylene",
    price: 30000,
    rating: 4.5,
    description: "Weather-resistant rug perfect for patios and verandas",
    imageUrl: Img1,
  },
  {
    id: 10,
    name: "Luxury Silk Blend",
    category: "luxury",
    type: "rug",
    room: "living",
    material: "silk blend",
    price: 150000,
    rating: 5.0,
    description: "Premium silk blend rug with exquisite hand-knotted details",
    imageUrl: Img2,
  },
  {
    id: 11,
    name: "Conference Room Pro",
    category: "commercial",
    type: "carpet",
    room: "office",
    material: "nylon",
    price: 90000,
    rating: 4.7,
    description: "Professional-grade carpet for conference rooms and offices",
    imageUrl: Img3,
  },
  {
    id: 12,
    name: "Kitchen Comfort",
    category: "modern",
    type: "rug",
    room: "kitchen",
    material: "cotton",
    price: 25000,
    rating: 4.4,
    description: "Comfortable, stain-resistant rug designed for kitchen spaces",
    imageUrl: Img4,
  },
];

export default function GalleryPage() {
  // State for filtering and sorting
  const [products, setProducts] = useState(SAMPLE_PRODUCTS);
  const [displayedProducts, setDisplayedProducts] = useState(SAMPLE_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [sortOption, setSortOption] = useState("featured");

  // Filter states
  const [filters, setFilters] = useState({
    category: [],
    type: [],
    room: [],
    material: [],
    priceRange: { min: 0, max: 200000 },
  });

  // Create unique filter options from products
  const filterOptions = {
    category: [...new Set(products.map((product) => product.category))],
    type: [...new Set(products.map((product) => product.type))],
    room: [...new Set(products.map((product) => product.room))],
    material: [...new Set(products.map((product) => product.material))],
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Toggle filter for checkboxes
  const toggleFilter = (filterType, value) => {
    setFilters((prevFilters) => {
      const currentFilters = [...prevFilters[filterType]];
      if (currentFilters.includes(value)) {
        return {
          ...prevFilters,
          [filterType]: currentFilters.filter((item) => item !== value),
        };
      } else {
        return {
          ...prevFilters,
          [filterType]: [...currentFilters, value],
        };
      }
    });
  };

  // Handle price range changes
  const handlePriceChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: {
        ...prevFilters.priceRange,
        [type]: parseInt(value, 10),
      },
    }));
  };

  // Apply filters and search
  useEffect(() => {
    let filteredProducts = [...products];

    // Apply search term
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filters
    if (filters.category.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.category.includes(product.category)
      );
    }

    // Apply type filters
    if (filters.type.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.type.includes(product.type)
      );
    }

    // Apply room filters
    if (filters.room.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.room.includes(product.room)
      );
    }

    // Apply material filters
    if (filters.material.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.material.includes(product.material)
      );
    }

    // Apply price range filter
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max
    );

    // Apply sorting
    if (sortOption === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }
    // "featured" doesn't need sorting as it's the default order

    setDisplayedProducts(filteredProducts);
  }, [searchTerm, filters, sortOption, products]);

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      category: [],
      type: [],
      room: [],
      material: [],
      priceRange: { min: 0, max: 200000 },
    });
    setSearchTerm("");
    setSortOption("featured");
  };

  // Format price for display
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero banner */}
      <div className="bg-amber-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Carpet Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our premium collection of carpets and rugs for every space.
            Quality craftsmanship and beautiful designs for your home, office,
            or mosque.
          </p>
        </div>
      </div>

      {/* Search and filter section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search input */}
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Search for carpets and rugs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Filter and sort controls */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* Filter button */}
              <div className="relative">
                <button
                  onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <Filter size={18} />
                  <span>Filter</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* Sort dropdown */}
              <div className="relative flex-1 md:flex-none">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full appearance-none px-4 py-2 pr-8 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                />
              </div>

              {/* View mode toggles */}
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-white text-gray-600"
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-white text-gray-600"
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Filter panel - shows when filter button is clicked */}
          {isFilterMenuOpen && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">Filters</h3>
                <button
                  onClick={resetFilters}
                  className="text-amber-800 hover:text-amber-900 text-sm font-medium"
                >
                  Reset All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Category filter */}
                <div>
                  <h4 className="font-medium mb-2">Category</h4>
                  <div className="space-y-2">
                    {filterOptions.category.map((category) => (
                      <label key={category} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(category)}
                          onChange={() => toggleFilter("category", category)}
                          className="rounded text-amber-600 focus:ring-amber-500"
                        />
                        <span className="capitalize">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type filter */}
                <div>
                  <h4 className="font-medium mb-2">Type</h4>
                  <div className="space-y-2">
                    {filterOptions.type.map((type) => (
                      <label key={type} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.type.includes(type)}
                          onChange={() => toggleFilter("type", type)}
                          className="rounded text-amber-600 focus:ring-amber-500"
                        />
                        <span className="capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Room filter */}
                <div>
                  <h4 className="font-medium mb-2">Room</h4>
                  <div className="space-y-2">
                    {filterOptions.room.map((room) => (
                      <label key={room} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.room.includes(room)}
                          onChange={() => toggleFilter("room", room)}
                          className="rounded text-amber-600 focus:ring-amber-500"
                        />
                        <span className="capitalize">{room}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material filter */}
                <div>
                  <h4 className="font-medium mb-2">Material</h4>
                  <div className="space-y-2">
                    {filterOptions.material.map((material) => (
                      <label key={material} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.material.includes(material)}
                          onChange={() => toggleFilter("material", material)}
                          className="rounded text-amber-600 focus:ring-amber-500"
                        />
                        <span className="capitalize">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price range filter */}
                <div>
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Min: {formatPrice(filters.priceRange.min)}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="200000"
                        step="5000"
                        value={filters.priceRange.min}
                        onChange={(e) =>
                          handlePriceChange("min", e.target.value)
                        }
                        className="w-full h-2 bg-gray-200 rounded appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Max: {formatPrice(filters.priceRange.max)}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="200000"
                        step="5000"
                        value={filters.priceRange.max}
                        onChange={(e) =>
                          handlePriceChange("max", e.target.value)
                        }
                        className="w-full h-2 bg-gray-200 rounded appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results summary */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Showing {displayedProducts.length} of {products.length} products
          </p>

          {/* Active filters display */}
          {(filters.category.length > 0 ||
            filters.type.length > 0 ||
            filters.room.length > 0 ||
            filters.material.length > 0 ||
            filters.priceRange.min > 0 ||
            filters.priceRange.max < 200000) && (
            <div className="flex flex-wrap gap-2">
              {filters.category.map((cat) => (
                <span
                  key={`cat-${cat}`}
                  className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm flex items-center"
                >
                  {cat}
                  <button
                    onClick={() => toggleFilter("category", cat)}
                    className="ml-1"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              {filters.type.map((type) => (
                <span
                  key={`type-${type}`}
                  className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm flex items-center"
                >
                  {type}
                  <button
                    onClick={() => toggleFilter("type", type)}
                    className="ml-1"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              {filters.room.map((room) => (
                <span
                  key={`room-${room}`}
                  className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm flex items-center"
                >
                  {room}
                  <button
                    onClick={() => toggleFilter("room", room)}
                    className="ml-1"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              {filters.material.map((material) => (
                <span
                  key={`material-${material}`}
                  className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm flex items-center"
                >
                  {material}
                  <button
                    onClick={() => toggleFilter("material", material)}
                    className="ml-1"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              {(filters.priceRange.min > 0 ||
                filters.priceRange.max < 200000) && (
                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm flex items-center">
                  {formatPrice(filters.priceRange.min)} -{" "}
                  {formatPrice(filters.priceRange.max)}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Product display */}
        {displayedProducts.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {displayedProducts.map((product, ind) =>
              viewMode === "grid" ? (
                // Grid view
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded capitalize">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-lg text-amber-800">
                        {formatPrice(product.price)}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-amber-500">★</span>
                        <span>{product.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    {/* <a
                      href="#consultation"
                      className="mt-4 block text-center bg-amber-800 text-white py-2 rounded-md hover:bg-amber-900 transition"
                    >
                      Inquire Now
                    </a> */}
                  </div>
                </div>
              ) : (
                // List view
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col md:flex-row"
                >
                  <div className="md:w-48 h-48">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {product.name}
                        </h3>
                        <div className="flex gap-2 mt-1">
                          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded capitalize">
                            {product.category}
                          </span>
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded capitalize">
                            {product.type}
                          </span>
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded capitalize">
                            {product.material}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-amber-500">★</span>
                        <span>{product.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-medium text-lg text-amber-800">
                        {formatPrice(product.price)}
                      </span>
                      <a
                        href="#consultation"
                        className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition"
                      >
                        Inquire Now
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          // No results
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any products matching your criteria. Try
              adjusting your filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
