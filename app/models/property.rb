class Property < ActiveRecord::Base
  has_many :results
  has_many :chemicals, through: :results
end
