﻿namespace web_api;

public class ShoppingCartService : IShoppingCartService
{
    public ShoppingItem Add(ShoppingItem newItem) => throw new NotImplementedException();

    public IEnumerable<ShoppingItem> GetAllItems() => throw new NotImplementedException();

    public ShoppingItem GetById(Guid id) => throw new NotImplementedException();

    public void Remove(Guid id) => throw new NotImplementedException();
}