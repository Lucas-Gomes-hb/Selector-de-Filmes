import {
  colorOptions,
  letterOptions,
  styleColorOption,
  numberOptions,
  characterOptions,
  styleNormalSelect,
} from "./selectData/data";
import Select from "react-select";

export const Selects = (
  <div className='selector'>
    <div className='selectDiv'>
      <p className="selectTitle">
        Selecione uma <span style={{fontWeight: "bold"}}>COR</span>:
      </p>
      <hr className="divider"/>
      <Select
        id='color'
        className='select'
        defaultValue={colorOptions[0]}
        options={colorOptions}
        styles={styleColorOption}
      />
    </div>
    <div className='selectDiv'>
      <p className="selectTitle">
        Selecione uma <span style={{fontWeight: "bold"}}>LETRA</span>:
      </p>
      <hr className="divider"/>
      <Select
        id='letter'
        className='select'
        defaultValue={letterOptions[0]}
        options={letterOptions}
        styles={styleNormalSelect}
      />
    </div>
    <div className='selectDiv'>
      <p className="selectTitle">
        Selecione um <span style={{fontWeight: "bold"}}>NÚMERO</span>:
      </p>
      <hr className="divider"/>
      <Select
        id='number'
        className='select'
        defaultValue={numberOptions[0]}
        options={numberOptions}
        styles={styleNormalSelect}

      />
    </div>
    <div className='selectDiv'>
      <p className="selectTitle">
        Selecione um <span style={{fontWeight: "bold"}}>PERSONAGEM</span>:
      </p>
      <hr className="divider"/>
      <Select
        id='number'
        className='select'
        defaultValue={characterOptions[0]}
        styles={styleNormalSelect}
        options={characterOptions}
      />
    </div>
  </div>
);
