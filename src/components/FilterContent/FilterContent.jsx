import React, { useState } from "react";
import "./FilterContent.scss";
import {
  Checkbox,
  InputRadio,
  Select,
  Input,
  MultiSelect,
} from "./../ExportComponent/ExportComponent";
import { currency, dataCryptocurrencies, dataVenues } from "../Mock/Mock";

export default function FilterContent() {
  const [valueVenues, setValueVenues] = useState([]);
  const [valueCryptocurrencies, setValueCryptocurrencies] = useState([]);
  const [valueMethods, setValueMethods] = useState([]);

  return (
    <div className="filter-content">
      <div className="filter-content__wrap">
        <div className="filter-content__left">
          <ul className="filter-content__list">
            <li className="filter-content__list-item">
              <div className="filter-content__label">
                <span>Валюта:</span>
              </div>
              <div className="filter-content__select">
                <Select placeholder="RUB" data={currency} />
              </div>
            </li>
            <li className="filter-content__list-item start">
              <div className="filter-content__label">
                <span>Площадки:</span>
              </div>
              <div className="filter-content__select">
                <MultiSelect
                  label="Площадки"
                  value={valueVenues}
                  setValue={setValueVenues}
                  options={dataVenues}
                />
              </div>
            </li>
            <li className="filter-content__list-item">
              <div className="filter-content__label">
                <span>Депозит:</span>
              </div>
              <div className="filter-content__select input">
                <Input placeholder="" value={1000} type="number" />
              </div>
            </li>
            <li className="filter-content__list-item start">
              <div className="filter-content__label">
                <span>Тип:</span>
              </div>
              <div className="filter-content__select">
                <div className="filter-content__groupradio">
                  <div className="filter-content__radio">
                    <InputRadio
                      label="Мейкер-Мейкер"
                      name="test1"
                      checked={true}
                    />
                    <InputRadio label="Мейкер-Тейкер" name="test1" />
                  </div>
                  <div className="filter-content__radio">
                    <InputRadio label="Тейкер-Мейкер" name="test1" />
                    <InputRadio label="Тейкер-Тейкер" name="test1" />
                  </div>
                  <div className="filter-content__radio">
                    <Checkbox label="Закупать частями" />
                  </div>
                </div>
              </div>
            </li>
            <li className="filter-content__list-item start">
              <div className="filter-content__label">
                <span>Стратегия:</span>
              </div>
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
          </ul>
        </div>
        <div className="filter-content__right">
          <ul className="filter-content__list">
            <li className="filter-content__list-item start">
              <div className="filter-content__label">
                <span>Криптовалюты:</span>
              </div>
              <div className="filter-content__select">
                <MultiSelect
                  label="Криптовалюты"
                  value={valueCryptocurrencies}
                  setValue={setValueCryptocurrencies}
                  options={dataCryptocurrencies}
                />
              </div>
            </li>
            <li className="filter-content__list-item start">
              <div className="filter-content__label">
                <span>Методы оплаты:</span>
              </div>
              <div className="filter-content__select">
                <MultiSelect
                  label="Методы оплаты"
                  value={valueMethods}
                  setValue={setValueMethods}
                  options={dataVenues}
                />
              </div>
            </li>
            <li className="filter-content__list-item start">
              <div className="filter-content__label">
                <span>Покупка-продажа:</span>
              </div>
              <div className="filter-content__select">
                <div className="filter-content__groupradio">
                  <div className="filter-content__radio">
                    <InputRadio label="Все" name="test2" checked={true} />
                    <InputRadio label="Межбирж" name="test2" />
                    <InputRadio label="Внутрибирж" name="test2" />
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
      </div>
    </div>
  );
}
