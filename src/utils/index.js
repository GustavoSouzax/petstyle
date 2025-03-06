export const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }
  
  export const formatDate = (date) => {
    return new Intl.DateTimeFormat("pt-BR").format(new Date(date))
  }
  
  export const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "")
  }
  
  export const truncateText = (text, length) => {
    if (!text) return ""
    return text.length > length ? `${text.substring(0, length)}...` : text
  }  