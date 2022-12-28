import React, { useState } from "react";
import "./FilterContent.scss";
import {
  Checkbox,
  InputRadio,
  Select,
  Input,
  MultiSelect,
} from "./../ExportComponent/ExportComponent";
import {
  currency,
  dataCryptocurrencies,
  dataMethods,
  dataVenues,
  makerData,
} from "../Mock/Mock";

export default function FilterContent({ support }) {
  const [valueVenues1, setValueVenues1] = useState([]);
  const [valueVenues2, setValueVenues2] = useState([]);
  const [valueCryptocurrencies, setValueCryptocurrencies] = useState([]);
  const [valueMethods1, setValueMethods1] = useState([]);
  const [valueMethods2, setValueMethods2] = useState([]);

  return (
    <div className="filter-content">
      <div className="filter-content__wrap">
        <div className="filter-content__left">
          <ul className="filter-content__list">
            <li className="filter-content__list-item">
              <div className="filter-content__select">
                <Select placeholder="RUB" data={currency} />
              </div>
            </li>
            <li className="filter-content__list-item">
              <div className="filter-content__select">
                <Select placeholder="" value={makerData[0]} data={makerData} />
              </div>
            </li>
            <li className="filter-content__list-item">
              <div className="filter-content__select input">
                <Input placeholder="Depozit" type="number" />
              </div>
            </li>
            <li className="filter-content__list-item col-3">
              <div className="filter-content__select">
                <MultiSelect
                  label="Криптовалюты"
                  value={valueCryptocurrencies}
                  setValue={setValueCryptocurrencies}
                  options={dataCryptocurrencies}
                />
              </div>
            </li>
            <li className={support ? "filter-content__list-item start w-25" : "filter-content__list-item start w-33"}>
              <div className="filter-content__select">
                <MultiSelect
                  label="Методы оплаты покупки "
                  value={valueMethods1}
                  setValue={setValueMethods1}
                  options={dataMethods}
                />
              </div>
            </li>
            {
              support ?
                <li className="filter-content__list-item start w-25">
                  <div className="filter-content__select">
                    <MultiSelect
                      label="Методы оплаты продажи "
                      value={valueMethods2}
                      setValue={setValueMethods2}
                      options={dataMethods}
                    />
                  </div>
                </li>
                :
                null
            }
            <li className={support ? "filter-content__list-item start w-25" : "filter-content__list-item start w-33"}>
              <div className="filter-content__select">
                <MultiSelect
                  label="Площадки 1"
                  value={valueVenues1}
                  setValue={setValueVenues1}
                  options={dataVenues}
                />
              </div>
            </li>
            <li className={support ? "filter-content__list-item start w-25" : "filter-content__list-item start w-33"}>
              <div className="filter-content__select">
                <MultiSelect
                  label="Площадки 2"
                  value={valueVenues2}
                  setValue={setValueVenues2}
                  options={dataVenues}
                />
              </div>
            </li>
          </ul>
        </div>
        {support ? (
          <div className="filter-content__right">
            <ul className="filter-content__list right">
              <li className="filter-content__list-item">
                <div className="filter-content__select">
                  <Checkbox label="Закупать частями" />
                </div>
              </li>
              <li className="filter-content__list-item start">
                <div className="filter-content__select">
                  <div className="filter-content__groupradio">
                    <div className="filter-content__radio">
                      <InputRadio
                        label="Встаём на первое место при продаже"
                        name="test"
                        checked={true}
                      />
                    </div>
                    <div className="filter-content__radio">
                      <InputRadio
                        label="Продаём с учетом лимитов конкурентов"
                        name="test"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="filter-content__list-item">
                <div className="filter-content__label">
                  <span>Спред:</span>
                </div>
                <div className="filter-content__groupinputs">
                  <Input placeholder="От" type="number" />
                  <Input placeholder="До" type="number" />
                </div>
              </li>
              <li className="filter-content__list-item">
                <div className="filter-content__label">
                  <span>Кол-во сделок:</span>
                </div>
                <div className="filter-content__select input">
                  <Input placeholder="" value="10" type="number" />
                </div>
              </li>
              <li className="filter-content__list-item">
                <div className="filter-content__label">
                  <span>Процент успешных сделок:</span>
                </div>
                <div className="filter-content__select input">
                  <Input placeholder="" value="85" type="number" />
                </div>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
