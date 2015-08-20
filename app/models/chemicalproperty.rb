class Chemicalproperty < ActiveRecord::Base
  belongs_to :chemical
  belongs_to :property
  belongs_to :result
end
