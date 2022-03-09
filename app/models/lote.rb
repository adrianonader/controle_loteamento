class Lote < ApplicationRecord
belongs_to :loteamento
has_one :cliente
end
