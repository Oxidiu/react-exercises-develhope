import React from 'react'

export const CardComponent = ({
    index,
    recipe,
    handleRecipeUpdate,
    deleteRecipe
}) => {
    return (
        <div >
            <input type="text" value={recipe}  onChange={(event) => {
                handleRecipeUpdate(event.target.value, index)
            }}/>
            <button onClick={deleteRecipe(index)}>Delete Recipe</button>
        </div>
    )
}