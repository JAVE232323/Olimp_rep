using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Newtonsoft.Json;
using WpfApp1.Models;

namespace WpfApp1
{
    /// <summary>
    /// Логика взаимодействия для Org.xaml
    /// </summary>
    public partial class Org : Page
    {
        private readonly HttpClient client = new HttpClient();

        public ObservableCollection<Employees> Employees { get; set; } = new ObservableCollection<Employees>();

        public ObservableCollection<Positions> Positions { get; set; } = new ObservableCollection<Positions>();
        public ObservableCollection<Divisions> Divisions { get; set; } = new ObservableCollection<Divisions>();
        public ObservableCollection<Cabinets> Cabinets { get; set; } = new ObservableCollection<Cabinets>();

        public Org()
        {
            InitializeComponent();
        }
        private async void WriteEmployee(StackPanel stackPanel, HttpResponseMessage response)
        {
            if (response.IsSuccessStatusCode)
            {
                var employee = JsonConvert.DeserializeObject<List<Employees>>(await response.Content.ReadAsStringAsync());

                Employees.Clear();

                SVmain.Children.Clear();

                foreach (var emp in employee)
                {
                    Border border = new Border()
                    {
                        Width = 500,
                        Height = 75,
                        BorderBrush = Brushes.Black,
                        BorderThickness = new Thickness(1),
                        Background = Brushes.LightCyan,
                        Margin = new Thickness(15),
                        Tag = $"{emp.Id + 1}"
                    };

                    border.MouseDown += EditEmploye;

                    StackPanel spMain = new StackPanel()
                    {
                        Orientation = Orientation.Vertical,
                        HorizontalAlignment = HorizontalAlignment.Left,
                        VerticalAlignment = VerticalAlignment.Center,
                    };

                    StackPanel spDivPos = new StackPanel()
                    {
                        Orientation = Orientation.Horizontal,
                        VerticalAlignment = VerticalAlignment.Center,
                        HorizontalAlignment = HorizontalAlignment.Left,
                    };

                    StackPanel spName = new StackPanel()
                    {
                        Orientation = Orientation.Horizontal,
                        VerticalAlignment = VerticalAlignment.Center,
                        HorizontalAlignment = HorizontalAlignment.Left,
                    };

                    StackPanel spPhoneEmail = new StackPanel()
                    {
                        Orientation = Orientation.Horizontal,
                        VerticalAlignment = VerticalAlignment.Center,
                        HorizontalAlignment = HorizontalAlignment.Left,
                    };

                    TextBlock Firstname = new TextBlock()
                    {
                        Text = emp.Firstname,
                        FontSize = 15,
                        

                    };

                    TextBlock Lastname = new TextBlock()
                    {
                        Text = emp.Lastname,
                        FontSize = 15,
                        Margin = new Thickness(5, 0, 5, 0),
                    };

                    TextBlock Middlename = new TextBlock()
                    {
                        Text = emp.Middlename,
                        FontSize = 15
                    };

                    TextBlock Division = new TextBlock()
                    {
                        Text = emp.IdDivision.ToString(),
                        FontSize = 10,
                        Margin = new Thickness(0, 0, 5, 0),
                    };

                    TextBlock Cabinet = new TextBlock()
                    {
                        Text = emp.IdCabinet.ToString(),
                        FontSize = 10
                    };

                    TextBlock Position = new TextBlock()
                    {
                        Text = emp.IdPosition.ToString(),
                        FontSize = 10
                    };

                    TextBlock Phone = new TextBlock()
                    {
                        Text = emp.Phone,
                        FontSize = 13,
                        Margin = new Thickness(0, 0, 5, 0),
                    };

                    TextBlock Email = new TextBlock()
                    {
                        Text = emp.Email,
                        FontSize = 13
                    };

                    spDivPos.Children.Add(Division);
                    spDivPos.Children.Add(Position);

                    spName.Children.Add(Firstname);
                    spName.Children.Add(Lastname);
                    spName.Children.Add(Middlename);

                    spPhoneEmail.Children.Add(Phone);
                    spPhoneEmail.Children.Add(Email);

                    spMain.Children.Add(spDivPos);
                    spMain.Children.Add(spName);
                    spMain.Children.Add(spPhoneEmail);
                    spMain.Children.Add(Cabinet);

                    border.Child = spMain;

                    SVmain.Children.Add(border);

                    Employees.Add(emp);

                }
            }
        }

        private void EditEmploye(object sender, RoutedEventArgs e)
        {
            if (sender is Border border)
            {
                border.Background = Brushes.Black;

                
            }
        }

        private async Task<string> GetPosition(int id)
        {
            HttpResponseMessage response = await client.GetAsync($"http:localhost:3000/api/Positions/{id}");

            var position = JsonConvert.DeserializeObject<List<Positions>>(await response.Content.ReadAsStringAsync());

            Positions.Clear();

            foreach (var pos in position)
            {
                Positions.Add(pos);
                return pos.Position;
            }

            return "";
        }

        private async Task<string> GetDivision(int id)
        {
            HttpResponseMessage response = await client.GetAsync($"http:localhost:3000/api/Divisions/{id}");

            var division = JsonConvert.DeserializeObject<List<Divisions>>(await response.Content.ReadAsStringAsync());

            Divisions.Clear();

            foreach (var div in division)
            {
                Divisions.Add(div);
                return div.Division;
            }

            return "";
        }

        private async Task<string> GetCabinet(int id)
        {
            HttpResponseMessage response = await client.GetAsync($"http:localhost:3000/api/Cabinets/{id}");

            var cabinet = JsonConvert.DeserializeObject<List<Cabinets>>(await response.Content.ReadAsStringAsync());

            Cabinets.Clear();

            foreach (var cab in cabinet)
            {
                Cabinets.Add(cab);
                return cab.Cabinet;
            }

            return "";
        }

        private async void RussionRoadbtn_Click(object sender, RoutedEventArgs e)
        {
            HttpResponseMessage response = await client.GetAsync("http://localhost:3000/api/OrganizationStructure/getAll");
            WriteEmployee(SVmain, response);
        }

        private async void AdminDepbtn_Click(object sender, RoutedEventArgs e)
        {
            HttpResponseMessage response = await client.GetAsync("http://localhost:3000/api/OrganizationStructure/AdminDep");
            WriteEmployee(SVmain, response);
        }

        private async void SmartRoad_Click(object sender, RoutedEventArgs e)
        {
            HttpResponseMessage response = await client.GetAsync("http://localhost:3000/api/OrganizationStructure/SmartRoads");
            WriteEmployee(SVmain, response);
        }

        private async void Dogovornoybtn_Click(object sender, RoutedEventArgs e)
        {
            HttpResponseMessage response = await client.GetAsync("http://localhost:3000/api/OrganizationStructure/Dogovornoy");
            WriteEmployee(SVmain, response);
        }

        private async void MiddleDepbtn_Click(object sender, RoutedEventArgs e)
        {
            HttpResponseMessage response = await client.GetAsync("http://localhost:3000/api/OrganizationStructure/getAll");
            WriteEmployee(SVmain, response);
        }

        private async void LisenceDepbtn_Click(object sender, RoutedEventArgs e)
        {
            HttpResponseMessage response = await client.GetAsync("http://localhost:3000/api/OrganizationStructure/getAll");
            WriteEmployee(SVmain, response);
        }

        private async void Marketingbtn_Click(object sender, RoutedEventArgs e)
        {
            HttpResponseMessage response = await client.GetAsync("http://localhost:3000/api/OrganizationStructure/getAll");
            WriteEmployee(SVmain, response);
        }
    }
}

