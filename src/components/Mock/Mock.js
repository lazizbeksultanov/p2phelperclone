import {
    BinanceIcon,
    Okx,
    Huobi,
    RosbankIcon,
    TinkoffIcon,
    UralsibIcon,
    QiwiIcon,
    YumoneyIcon,
    CreditBankIcon,
    MTSIcon,
    PostIcon,
} from "./../../Icons/ExportIcons";

export const columns = [
    {
        Header: "Связка",
        accessor: "bundle",
    },
    {
        Header: "Объявление 1",
        accessor: "announcement_1",
    },
    {
        Header: "Объявление 2",
        accessor: "announcement_2",
    },
    {
        Header: "Лимиты",
        accessor: "limits",
    },
    {
        Header: "Спред",
        accessor: "spread",
        Cell: (s) => (
            <span className={s?.value?.className ? s?.value?.className : ""}>
                {s?.value?.value}
            </span>
        ),
    },
    {
        Header: "Профит",
        accessor: "profit",
        Cell: (s) => (
            <span className={s?.value?.className ? s?.value?.className : ""}>
                {s?.value?.value}
            </span>
        ),
    },
];

export const tableMockData = [
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "green" },
        profit: { value: "195.24", className: "green" },
    },
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "green" },
        profit: { value: "195.24", className: "green" },
    },
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "green" },
        profit: { value: "195.24", className: "green" },
    },
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "green" },
        profit: { value: "195.24", className: "green" },
    },
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "red" },
        profit: { value: "195.24", className: "green" },
    },
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "green" },
        profit: { value: "195.24", className: "red" },
    },
];

export const dataVenues = [
    {
        label: (
            <span className="multi-select-item">
                <BinanceIcon />
                binance
            </span>
        ),
        value: "id1",
    },
    {
        label: (
            <span className="multi-select-item">
                <Okx />
                okx
            </span>
        ),
        value: "id2",
    },
    {
        label: (
            <span className="multi-select-item">
                <Huobi />
                huobi
            </span>
        ),
        value: "id3",
    },
];

export const currency = [
    { label: "RUB", value: "id1" },
    { label: "EUR", value: "id2" },
    { label: "USD", value: "id3" },
    { label: "UAH", value: "id4" },
];

export const dataCryptocurrencies = [
    {
        label: (
            <span className="multi-select-item">
                <RosbankIcon />
                Росбанк
            </span>
        ),
        value: "Росбанк",
    },
    {
        label: (
            <span className="multi-select-item">
                <TinkoffIcon />
                Тинькофф
            </span>
        ),
        value: "Тинькофф",
    },
    {
        label: (
            <span className="multi-select-item">
                <UralsibIcon />
                Уралсиб
            </span>
        ),
        value: "Уралсиб",
    },
    {
        label: (
            <span className="multi-select-item">
                <QiwiIcon />
                QIWI
            </span>
        ),
        value: "QIWI",
    },
    {
        label: (
            <span className="multi-select-item">
                <YumoneyIcon />
                Юmoney
            </span>
        ),
        value: "Юmoney",
    },
    {
        label: (
            <span className="multi-select-item">
                <CreditBankIcon />
                Home Credit Bank (Russia)
            </span>
        ),
        value: "CreditBank",
    },
    {
        label: (
            <span className="multi-select-item">
                <MTSIcon />
                MTS- Bank
            </span>
        ),
        value: "MTS",
    },
    {
        label: (
            <span className="multi-select-item">
                <PostIcon />
                Post Bank
            </span>
        ),
        value: "PostBank",
    },
];
