from graphviz import Digraph

# Correct syntax for labeled edges
flowchart = Digraph(format='png', graph_attr={'rankdir': 'TB'}, node_attr={'shape': 'box', 'style': 'rounded'})

# Start node
flowchart.node("Start", "Start", shape="oval")

# Input nodes
flowchart.node("Input1", "Enter Name")
flowchart.node("Input2", "Enter Weight (kg)")
flowchart.node("Input3", "Enter Height (m)")

# Process node
flowchart.node("Calc", "Calculate BMI\nBMI = Weight / (Height * Height)")

# Decision node
flowchart.node("Decision", "Is 20 <= BMI <= 25?", shape="diamond")

# Output nodes
flowchart.node("Normal", "Normal BMI\nYou are healthy.")
flowchart.node("Danger", "Dangerous BMI\nLosing or gaining weight may help.")

# End node
flowchart.node("End", "End", shape="oval")

# Connect the nodes
flowchart.edge("Start", "Input1")
flowchart.edge("Input1", "Input2")
flowchart.edge("Input2", "Input3")
flowchart.edge("Input3", "Calc")
flowchart.edge("Calc", "Decision")
flowchart.edge("Decision", "Normal", label="Yes")
flowchart.edge("Decision", "Danger", label="No")
flowchart.edge("Normal", "End")
flowchart.edge("Danger", "End")

# Render the flowchart
flowchart_path = "flowchart"
flowchart.render(flowchart_path, format="png", cleanup=True)

flowchart_path + ".png"
