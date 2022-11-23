import {
  colorOptions,
  letterOptions,
  styleColorOption,
  numberOptions,
  characterOptions,
} from "./selectData/data";
import Select from "react-select";

export const Selects = (
  <div className='selector'>
    <div className='selectDiv'>
      <div className='selectTitle'>
        <div className='selectTitle'>
          <p>
            Selecione uma <span style={{fontWeight: "bold"}}>COR</span>:
          </p>
        </div>
      </div>
      <Select
        id='color'
        className='select'
        defaultValue={colorOptions[0]}
        options={colorOptions}
        styles={styleColorOption}
      />
    </div>
    <div className='selectDiv'>
      <div className='selectTitle'>
        <p>
          Selecione uma <span style={{fontWeight: "bold"}}>LETRA</span>:
        </p>
      </div>
      <Select
        id='letter'
        className='select'
        defaultValue={letterOptions[0]}
        options={letterOptions}
      />
    </div>
    <div className='selectDiv'>
      <div className='selectTitle'>
        <p>
          Selecione um <span style={{fontWeight: "bold"}}>NÚMERO</span>:
        </p>
      </div>
      <Select
        id='number'
        className='select'
        defaultValue={numberOptions[0]}
        options={numberOptions}
      />
    </div>
    <div className='selectDiv'>
      <div className='selectTitle'>
        <p>
          Selecione um <span style={{fontWeight: "bold"}}>PERSONAGEM</span>:
        </p>
      </div>
      <Select
        id='number'
        className='select'
        defaultValue={characterOptions[0]}
        options={characterOptions}
      />
    </div>
  </div>
);
