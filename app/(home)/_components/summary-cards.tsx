import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCardsProps {
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-6">
      {/* PRIMEIRO CARD */}
      <SummaryCard
        amount={balance}
        title="Saldo"
        icon={<WalletIcon size={16} />}
        size="large"
      />

      {/* OUTROS CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          amount={investmentsTotal}
          icon={<PiggyBankIcon size={16} />}
          title="Investimento"
        />
        <SummaryCard
          amount={depositsTotal}
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
        />
        <SummaryCard
          amount={expensesTotal}
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesa"
        />
      </div>
    </div>
  );
};

export default SummaryCards;
