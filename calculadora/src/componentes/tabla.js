import React from "react";
import '../styles/tabla.css'

function Tabla(props){
    return (
      
      <div className="contenedor-tabla">
         <div className="busqueda">
            <i></i>
            <input type='text'></input>
         </div>
         <table className="customTable">
            <thead>
                <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
                <th>Header 4</th>
                <th>Header 5</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
                <td>Row 1, Cell 3</td>
                <td>Row 1, Cell 4</td>
                <td>Row 1, Cell 5</td>
                </tr>
                <tr>
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
                <td>Row 2, Cell 3</td>
                <td>Row 2, Cell 4</td>
                <td>Row 2, Cell 5</td>
                </tr>
                <tr>
                <td>Row 3, Cell 1</td>
                <td>Row 3, Cell 2</td>
                <td>Row 3, Cell 3</td>
                <td>Row 3, Cell 4</td>
                <td>Row 3, Cell 5</td>
                </tr>
                <tr>
                <td>Row 4, Cell 1</td>
                <td>Row 4, Cell 2</td>
                <td>Row 4, Cell 3</td>
                <td>Row 4, Cell 4</td>
                <td>Row 4, Cell 5</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
}

export default Tabla;