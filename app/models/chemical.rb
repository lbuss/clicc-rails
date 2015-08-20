class Chemical < ActiveRecord::Base
  has_many :chemicalproperties
  has_many :properties, through: :chemicalproperties
  has_many :results, through: :chemicalproperties
end
