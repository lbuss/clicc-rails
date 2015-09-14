class Result < ActiveRecord::Base
  belongs_to :chemical
  belongs_to :property

  def self.create_with_property(chemical, res)
    @property = Property.find_or_create_by(name: res['property']) do |chem|
      #update chems properties
    end
    @result = Result.new(property: @property, chemical: chemical, value: res['result'])
    @result.save()

    return @result
  end
end
