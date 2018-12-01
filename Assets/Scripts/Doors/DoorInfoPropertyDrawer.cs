﻿namespace Assets.Scripts.Doors
{
	using UnityEditor;
	using UnityEngine;


	public class DoorInfoPropertyDrawer : PropertyDrawer
	{
		public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
		{
			if (GUILayout.Button("Highlight door"))
			{
				var from = property.FindPropertyRelative(nameof(DoorInfo.From)).vector3Value;
				var to = property.FindPropertyRelative(nameof(DoorInfo.To)).vector3Value;

				Handles.DrawSolidRectangleWithOutline(new Rect(from, to - from), Color.clear, Color.yellow);
			}
		}
	}
}