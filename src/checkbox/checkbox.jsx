import React from "react";
import { Checkbox,FormControlLabel } from "@mui/material";
export const CheckBox = (<div id="selectionMenu" className="selectionMenu">
    <div><FormControlLabel control={<Checkbox defaultChecked />} label="Filmes" /></div>
    <div><FormControlLabel control={<Checkbox defaultChecked />} label="Bebidas" /></div>
    <div><FormControlLabel control={<Checkbox defaultChecked />} label="Sobremesas" /></div>
    <div><FormControlLabel control={<Checkbox defaultChecked />} label="Comidas" /></div>
</div>);