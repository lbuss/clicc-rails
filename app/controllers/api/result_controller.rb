class Api::ResultController < ApplicationController
  def index
    @chem_list = Chemical.all
    render json: @chem_list
  end

  def show

    # @chemical = Chemical.find_by( )
    if @chemical
      render json: @chemical
    else
      render json: {:error => "not-found"}.to_json, :status => 404
    end
  end

  # TODO:filter users from using methods other than index, show

  def create
    @result = Result.new(result_params)
    @chemical = Chemical.find(params.chemical.id)
    @property = Property.find(params.property.id)

    @chemprop = Chemicalproperty.create(
      chemical: @chemical,
      property: @property,
      result: @result
    )

    if @result.save! and @chemprop.save!
      render json: @result
    else
      render json: {errors: @chemical.errors.full_messages}
    end
  end

  def update
    # @chemi = Track.find(params[:id])
    # if @track.update_attributes(track_params)
    #   render json: @track
    # else
    #   render json: {errors: @track.errors.full_messages}
    # end
  end

  def destroy
    # @track = Track.find(params[:id])
    # if @track.destroy!
    #   render json: {}
    # else
    #   render json: {errors: @track.errors.full_messages}
    # end
  end

  private
  def chemical_params
    params.require(:chemical).permit(:name, :casrn, :smiles);
  end
end
