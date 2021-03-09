export class Config {
  
  private static get LOCAL_END_POINT(): string { return './assets/jsons/'; }

  public static LOCAL_SERVICE = {

    // Login
    login: Config.LOCAL_END_POINT + 'login.json',
    // Cart
    cartData: Config.LOCAL_END_POINT + 'cart.json',
    // Main Content
    mainContentData: Config.LOCAL_END_POINT + 'project.json',
    // Side Bar
    sideBarData: Config.LOCAL_END_POINT + 'sideNav.json',
    // Inventory
    inventoryData: Config.LOCAL_END_POINT + 'inventory.json'
  };

}