class Result < ActiveRecord::Base
  has_one :chemicalproperties
  has_one :chemical, through: :chemicalproperties
  has_one :property, through: :chemicalproperties
end
