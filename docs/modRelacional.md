# Modelo Relacional

# (Imagem em "docs/diagramasIMGS")

// Cool Class Diagram by yUML alterado
// ------------------

// Chain elements like this
//[Usuario]<>-orders*>[Cliente]++-0..*>[Planos][usuario]++1.-n.>[Cliente][cliente]<>n.-n.>[Planos][cliente]<>1.-1.>[Mensalidade][cliente]++1.-1.>[Medidas]

// Add notes
// [Order]-[note: Aggregate Root ala DDD{bg:wheat}]

// Add more detail
[Usuario|+id: Integer;+nome: VARCHAR;+email: VARCHAR;+cargo: Integer;-password: VARCHAR;+status: Integer;+token: Integer;+valid_date_token: DATE]

[Planos|+id: Integer; +nome: VARCHAR; +descricao: VARCHAR; +valor: Double][cliente|+id: integer; +nome: varchar; +email: varchar; +staatus: integer]
[Medidas|+id: Integer; +altura: Integer; +peso: Float; +pescoco: Float; +torax_sup: Float; +torax_inf: Float;+busto: Float; +cintura: Float; +abdomen: Float; +quadril: Float; +coxa: VARCHAR; +panturrilha: VARCHAR; +braco: VARCHAR; +antebraco: VARCHAR; +created_at: Date][mensalidade|+id: integer; +mes: integer; +ano: integer; +status: integer]
