   M S B A M L   `   `   `  ����B  >WpfApp1, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null!clr-namespace:WpfApp1WpfApp1  5   	       WpfApp1.MainWindow   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   'localclr-namespace:WpfApp1     5   	     � Title$  Дороги России��5   	   $	��720��6   $
��1080��6,    � 	Resources 5	         TextBox.Static.Border �� Color  TextBox.MouseOver.Border  TextBox.Focus.Border  Txbgrd0 �� 
TargetType �� Property �� Value-  'System.Windows.Input.KeyboardNavigation �� 
TargetType ��Name �� CornerRadius	 J� SnapsToDevicePixels
 ��Name �� Triggers P� Property P� Value �� 
TargetName �� Triggers ]� 
Conditions �� Property �� Value��%�  &	        &	 #     &	 F     &	 i     7   7  7  �� 5
   
   $ 	#FFABAdB3��68   �� 5   
   $ 	#FF7EB4EA��6;   �� 5   
   $ 	#FF569DE5��67   �� 5   
   " ��6    .�5      ��  � ��# � ��6+   �� 5       � ��8   6,   �� 5       � ��# � ��6+   �� 5       � ��$ 1q�60   �� 5       �@ TabNavigation$
 None=�6A   �� 5       � ��$
 Left=�6;   �� 5       �@�FocusVisualStyle 61   Z� �� 5       �@J�	AllowDrop . 6*   �� 5       �@��PanningMode$ VerticalFirst=�69   �� 5       �@��IsFlicksEnabled .  67   �� 5       � �� 5      �� 5      " ��6&   .R�5      �� $ border��6!   $ 30��61   #��z��6C   #��z��6m   #��z��6�   	 . ._�5      �� $
 PART_ContentHost��6+   |�.  $��Hidden=�6W   $��Hidden=�6~   5       5      P� 5       � {� .  . �5    "   �� $ border��6<    �@J�Opacity$
 0.56Q�6P   5!      P� 5"       �@J�IsMouseOver . . �5#   "   �� $ border��6@   8   � ��6T   5$      P� 5%       �@J�IsKeyboardFocused . . �5&   "   �� $ border��6@   8   � ��6T   5'      5)      5+       5,      ]� 5-       5.      �� 5/      + �@��#IsInactiveSelectionHighlightEnabled . 6S   �� 50       �@��IsSelectionActive .  6A   ./�52      ��  �@��SelectionBrush# � /�67   53      55      56      .��57      �  � RowDefinitions 58   
   �� 59      $	��100 �6   �� 5:      .+�5=   
   �� $��0��6    �� Orientation$ 
Horizontal=�6%   $��Center=�6>   $
��Left=�6Y   .+�5>      �� $9��3C:\Users\user\Desktop\qwe\WpfApp1\Pictures\Logo.png��6   $
��20 5q�6Q   �� 5?      #���  6   $	��600��68   $��50��6D   $��3q�6P   5@       � 5B   
   -   5          �Name$ 	mainFrame��5B      $��1��6   $��1��60   5C      5D      