﻿namespace web_api;

public interface IShoppingCartService
{
    IEnumerable<ShoppingItem> GetAllItems();
    ShoppingItem Add(ShoppingItem newItem);
    ShoppingItem GetById(Guid id);
    void Remove(Guid id);
}