require "uri"
require "net/http"

class Api::ChemicalsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @chem_list = Chemical.all
    render json: @chem_list
  end

  def search
    @chemical = Chemical.search(params['format'], params['chem'])
    if !@chemical.empty?
      render :results
    else
      @chemical = [{
          params['format'].to_sym => params['chem'],
          :results => 'not_found'
      }]
      render json: @chemical.to_json
    end
  end

  def submit
    # work_server = 'http://localhost:5000/submit'
    work_server = 'http://lbuss.pythonanywhere.com/run_job';
    @response = Net::HTTP.post_form(URI.parse(work_server), params)
    # @results = ActiveSupport::JSON.decode(response.body)
    # @chemical = [Chemical.find_or_create_by('smiles': @results['SMILES'])]
    # @results['results'].each do |res|
    #   Result.create_with_property(@chemical[0], res)
    # end

    render json: @response.body
  end

  def show
    # @chemical = Chemical.find_by params.input_type.to_sym => params.input
    if @chemical
      render json: @chemical
    else
      render json: {:error => "not-found"}.to_json, :status => 404
    end
  end

  # TODO:filter users from using methods other than index, show

  def create
    @chemical = Chemical.new(chemical_params)
    if @chemical.save!
      render json: @chemical
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
    params.require(:chemical).permit(:name, :casrn, :smiles, :file, :MD);
  end
end
