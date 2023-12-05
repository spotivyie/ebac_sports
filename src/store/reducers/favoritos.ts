import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritarState = {
  itens: Produto[]
}

const initialState: FavoritarState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favorita: (state, action: PayloadAction<Produto>) => {
      const roupa = action.payload

      if (state.itens.find((produto) => produto.id === roupa.id)) {
        const favoritosSemProduto = state.itens.filter(
          (produto) => produto.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(roupa)
      }
    }
  }
})

export const { favorita } = favoritosSlice.actions
export default favoritosSlice.reducer
