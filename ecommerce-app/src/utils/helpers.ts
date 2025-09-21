export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price);
  };
  
  export const calculateDiscount = (originalPrice: number, discountedPrice: number): number => {
    if (originalPrice <= 0) return 0;
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  };
  
  export const debounce = <T extends (...args: unknown[]) => unknown>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  
  export const getUrlParams = (): URLSearchParams => {
    return new URLSearchParams(window.location.search);
  };
  
  export const updateUrlParams = (params: Record<string, string | undefined>): void => {
    const urlParams = new URLSearchParams(window.location.search);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === '') {
        urlParams.delete(key);
      } else {
        urlParams.set(key, value);
      }
    });
    
    const newUrl = `${window.location.pathname}${urlParams.toString() ? '?' + urlParams.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);
  };
  
  export const classNames = (...classes: (string | undefined | null | boolean)[]): string => {
    return classes.filter(Boolean).join(' ');
  };