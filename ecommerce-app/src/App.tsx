import { useState } from 'react';
import { Grid3x3, List, Filter } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/layout/HeroBanner';
import Sidebar from '@/components/filters/Sidebar';
import ProductGrid from '@/components/products/ProductGrid';
import Pagination from '@/components/common/Pagination';
import { useFilters } from '@/hooks/useFilters';
import { usePagination } from '@/hooks/usePagination';
import { products } from '@/data/products';
import type { ViewMode, SortOption } from '@/types';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const {
    filters,
    setFilters,
    sortBy,
    setSortBy,
    filteredAndSortedProducts,
  } = useFilters(products);

  const {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
    changeItemsPerPage,
    totalItems,
  } = usePagination({
    items: filteredAndSortedProducts,
    itemsPerPage,
  });

  const handleItemsPerPageChange = (value: string) => {
    const newValue = parseInt(value);
    setItemsPerPage(newValue);
    changeItemsPerPage(newValue);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={0} cartTotal={0.00} />

      <div className=" px-4 py-6 ">
        

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="lg:hidden bg-primary text-white px-4 py-2 rounded-lg inline-flex items-center gap-2"
          >
            <Filter size={20} />
            {showMobileFilter ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Sidebar */}
          <div className={`${showMobileFilter ? 'block' : 'hidden'} lg:block`}>
            <Sidebar filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <HeroBanner />
            <div className="flex flex-col bg-[#F6F7F8] sm:flex-row justify-between items-start sm:items-center mb-6  p-4 rounded-lg">
              <div className="flex mb-4 items-center sm:mb-0 gap-20">
                <p className="text-sm text-gray-800">
                  {totalItems} Items
                </p>
                <div className='flex items-center gap-4'>
                  <label className="text-sm text-gray-600">Sort By:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="popularity">Popularity</option>
                  </select>
                </div>
                <div className="flex items-center gap-4">
                  <label className="text-sm text-gray-600">Show:</label>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => handleItemsPerPageChange(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                {/* View Mode */}
                <div className="flex gap-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid3x3 size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list'
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                    aria-label="List view"
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <ProductGrid products={paginatedItems} viewMode={viewMode} />

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;