export const WISH_LIST = 'WISH_LIST';

export const wishList = (id) => {
    return { type: WISH_LIST, prodId: id};
}