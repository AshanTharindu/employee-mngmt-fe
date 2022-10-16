import { employeeActions } from './employee-slice';

export const fetchEmloyees = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'http://0.0.0.0:3000/employee-management/employees'
      );

      if (!response.ok) throw new Error('Could not fetch cart data!');

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        employeeActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerEmployee = (employee) => {
  return async (dispatch) => {
    const saveEmployee = async (employee) => {
      const response = await fetch(
        'http://0.0.0.0:3000/employee-management/employees',
        {
          method: 'POST',
          body: JSON.stringify(employee),
        }
      );

      if (!response.ok) throw new Error('Registering employee failed');
    };

    try {
      const registeredEmployee = await saveEmployee(employee);

      dispatch(employeeActions.addEmloyee(registeredEmployee));
    } catch (error) {
      console.log(error);
    }
  };
};
