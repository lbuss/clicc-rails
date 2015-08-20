class Property < ActiveRecord::Base
  has_many :chemicalproperties
  has_many :chemicals, through: :chemicalproperties
  has_many :results, through: :chemicalproperties
end
