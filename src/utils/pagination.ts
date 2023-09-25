export function paginate(page: number, limit: number, totalItems: number) {
  const offset = (page - 1) * limit;
  const totalPages = Math.ceil(totalItems / limit);
  return { offset, totalPages };
}
