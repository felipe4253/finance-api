import { Investimento } from '../models/investimento'

export class InvestimentoService {

    getInvestimentosRendaFixa(): Investimento[] {

        return [
            {
                tipo: "Renda Fixa",
                titulo: "Tesouro Direto Prefixado 2031",
                descricao: "Tesouro Direto Prefixado com vencimento em maio/2021",
                valor: 120
            },
            {
                tipo: "Renda Fixa",
                titulo: "Tesouro Direto Prefixado 2031",
                descricao: "Tesouro Direto Prefixado com vencimento em maio/2021",
                valor: 120
            },
            {
                tipo: "Renda Fixa",
                titulo: "Tesouro Direto Prefixado 2031",
                descricao: "Tesouro Direto Prefixado com vencimento em maio/2021",
                valor: 120
            },
            {
                tipo: "Renda Fixa",
                titulo: "Tesouro Direto Prefixado 2031",
                descricao: "Tesouro Direto Prefixado com vencimento em maio/2021",
                valor: 120
            }
        ]
    }

    getInvestimentosRendaVariavel(): Investimento[] {

        return [
            {
                tipo: "Renda Variável",
                titulo: "Ações Empresa Acme",
                descricao: "Ações da empresa Acme ",
                valor: 45.99
            },
            {
                tipo: "Renda Fixa",
                titulo: "Tesouro Direto Prefixado 2031",
                descricao: "Tesouro Direto Prefixado com vencimento em maio/2021",
                valor: 120
            },
            {
                tipo: "Renda Fixa",
                titulo: "Tesouro Direto Prefixado 2031",
                descricao: "Tesouro Direto Prefixado com vencimento em maio/2021",
                valor: 120
            },
            {
                tipo: "Renda Fixa",
                titulo: "Tesouro Direto Prefixado 2031",
                descricao: "Tesouro Direto Prefixado com vencimento em maio/2021",
                valor: 120
            }
        ]
    }

    getInvestimentosReservaEmergencia(): Investimento[] {

        return [
            {
                tipo: "Renda Variável",
                titulo: "Ações Empresa Acme",
                descricao: "Ações da empresa Acme ",
                valor: 45.99
            },
            {
                tipo: "Renda Fixa",
                titulo: "Tesouro Direto Prefixado 2031",
                descricao: "Tesouro Direto Prefixado com vencimento em maio/2021",
                valor: 120
            },
            {
                tipo: "Renda Fixa",
                titulo: "Tesouro Direto Prefixado 2031",
                descricao: "Tesouro Direto Prefixado com vencimento em maio/2021",
                valor: 120
            },
            {
                tipo: "Renda Fixa",
                titulo: "Tesouro Direto Prefixado 2031",
                descricao: "Tesouro Direto Prefixado com vencimento em maio/2021",
                valor: 120
            }
        ]
    }
}