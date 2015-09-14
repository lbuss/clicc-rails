class Chemical < ActiveRecord::Base
  has_many :results
  has_many :properties, through: :results

  def self.search(format, input)
    @chem = self.where( format.to_sym => input )
  end
end
