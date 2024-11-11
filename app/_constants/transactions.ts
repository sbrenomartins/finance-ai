import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_TYPE_OPTIONS = [
  {
    label: "Despesa",
    value: TransactionType.EXPENSE,
  },
  {
    label: "Depósito",
    value: TransactionType.DEPOSIT,
  },
  {
    label: "Investimento",
    value: TransactionType.INVESTMENT,
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    label: "Cartão de crédito",
    value: TransactionPaymentMethod.CREDIT_CARD,
  },
  {
    label: "Cartão de débito",
    value: TransactionPaymentMethod.DEBIT_CARD,
  },
  {
    label: "Transferência bancária",
    value: TransactionPaymentMethod.BANK_TRANSFER,
  },
  {
    label: "Boleto bancário",
    value: TransactionPaymentMethod.BANK_SLIP,
  },
  {
    label: "Dinheiro",
    value: TransactionPaymentMethod.CASH,
  },
  {
    label: "Pix",
    value: TransactionPaymentMethod.PIX,
  },
  {
    label: "Outros",
    value: TransactionPaymentMethod.OTHER,
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    label: "Moradia",
    value: TransactionCategory.HOUSING,
  },
  {
    label: "Transporte",
    value: TransactionCategory.TRANSPORTATION,
  },
  {
    label: "Alimentação",
    value: TransactionCategory.FOOD,
  },
  {
    label: "Entretenimento",
    value: TransactionCategory.ENTERTAINMENT,
  },
  {
    label: "Saúde",
    value: TransactionCategory.HEALTH,
  },
  {
    label: "Utilidades",
    value: TransactionCategory.UTILITY,
  },
  {
    label: "Salário",
    value: TransactionCategory.SALARY,
  },
  {
    label: "Educação",
    value: TransactionCategory.EDUCATION,
  },
  {
    label: "Outros",
    value: TransactionCategory.OTHER,
  },
];

export const TRANSACTION_CATEGORY_LABELS = {
  HOUSING: "Moradia",
  TRANSPORTATION: "Transporte",
  FOOD: "Alimentação",
  ENTERTAINMENT: "Entretenimento",
  HEALTH: "Saúde",
  UTILITY: "Utilidades",
  SALARY: "Salário",
  EDUCATION: "Educação",
  OTHER: "Outros",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CREDIT_CARD: "Cartão de crédito",
  DEBIT_CARD: "Cartão de débito",
  BANK_TRANSFER: "Transferência bancária",
  BANK_SLIP: "Boleto bancário",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
};
