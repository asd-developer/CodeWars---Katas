filterResults(){
      this.filtered_data = this.vehicles;
        //FILTER INSURED
      if(typeof this.insurance_filter !== undefined){
        this.filtered_data = this.filtered_data.filter((car : any) =>{
          if(car.insurance == this.insurance_filter){
            return car
          }
          else if(this.insurance_filter == null){
            return car
          }
        });
      }
      //FILTER ODOMETER
      if(this.odometer_filter){
        this.filtered_data = this.filtered_data.filter((car : any) =>{
          if( this.odometer_filter == 75000 && car.odometer > 75000 || this.odometer_filter == 250000 && car.odometer > 250000){
            return car
          }
          else if(this.odometer_filter == 130000 && car.odometer >= 130000){
            return car
          }
        });
      }
        if(this.no_driver_filter){
        this.filtered_data = this.filtered_data.filter((car : any) =>{
          if( this.no_driver_filter == true && car.drive_name == 'N/A'){
            return car
          }
        });
      }
    },
  },
