import * as C from './category.ts'

export const Category = () => {
  return(
    <C.CategoryContainer>

      <C.tag>
        <h3>Category</h3>
        <C.lista>
          <C.item>All</C.item>
          <C.item>Burguer</C.item>
          <C.item>Pizza</C.item>
          <C.item>Coffe</C.item>
          <C.item>FreshPacks</C.item>
          <C.item>Fresh Packs</C.item>
          <C.item>Fresh Packs</C.item>
          <C.item>Fresh Packs</C.item>
        </C.lista>
      </C.tag>

      <C.menu>
        <h3>All Items</h3>
        
        <div className="card_container">
          <div className="card">
            <figure>
              <img src="" alt="" />
            </figure>

            <div className="content">
              <header>Burgers</header>
              <main>
                <span>Best Burgers</span>
                <span>42 Jong Pannchester</span>
              </main>
              <footer>
                <span>30-40min</span>
                <span>From $34.4</span>
              </footer>
            </div>
          </div>
        </div>
      </C.menu>
      
    </C.CategoryContainer>
  )
}